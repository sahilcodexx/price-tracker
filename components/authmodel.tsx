"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AuthModelProps } from "@/utils/types";
import { Button } from "./ui/button";
import { createClient } from "@/lib/superbase/client";

const AuthModel = ({ isOpen, onClose }: AuthModelProps) => {
  const supabase = createClient();
  const handleGoogleLogin = async() => {
    const { origin } = window.location;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options:{
        redirectTo:`${origin}/auth/callback`
      }
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Trackhatke !</DialogTitle>
          <DialogDescription>
            Create an account to start tracking product prices, get alerts, and manage your wishlist.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleGoogleLogin} className="outline">
          Continue with google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModel;
