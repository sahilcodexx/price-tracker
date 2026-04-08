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
        <Button size={"sm"} className="bg-linear-to-b from-blue-500 to-blue-700 text-xs">
          <LogOut className="w-3 h-3" />
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <div>
      <Button
        onClick={() => setShowAuthModel(true)}
        className="bg-linear-to-b from-blue-500 to-blue-700 text-xs"
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
