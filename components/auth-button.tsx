"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import AuthModel from "./authmodel";
import { LogOut } from "lucide-react";

const AuthButton = ({ user }) => {
  if (user) {
    return (
      <form action={() => {}}>
        <Button>
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  const [showAuthModel, setShowAuthModel] = useState<boolean>(false);
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
