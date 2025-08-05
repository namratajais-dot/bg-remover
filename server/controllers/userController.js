import { Webhook } from 'svix';
import userModel from '../models/userModel.js';

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url
        };

        const user = await userModel.create(userData);
        console.log("✅ User created:", user);

        return res.status(201).json({ success: true });
      }

      case "user.updated": {
        const updateData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url
        };

        const updated = await userModel.findOneAndUpdate(
          { clerkId: data.id },
          updateData,
          { new: true }
        );

        console.log("🔄 User updated:", updated);
        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        const deleted = await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("❌ User deleted:", deleted);
        return res.status(200).json({ success: true });
      }

      default:
        console.warn("⚠️ Unknown webhook type:", type);
        return res.status(200).json({ received: true });
    }

  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };

