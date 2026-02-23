"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import AuthModel from "./authmodel";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/actions";
import { User } from "@/utils/types";

const AuthButton = ({ user }: { user: User | null }) => {
  const [showAuthModel, setShowAuthModel] = useState<boolean>(false);

  if (user) {
    return (
      <form action={signOut}>
        <Button>
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <div>
      <Button
        onClick={() => setShowAuthModel(true)}
        className="bg-orange-500 hover:bg-orange-600"
      >
        Sgin in
      </Button>
      <AuthModel
        isOpen={showAuthModel}
        onClose={() => setShowAuthModel(false)}
      />
    </div>
  );
};

export default AuthButton;
