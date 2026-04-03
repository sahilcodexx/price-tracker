"use client";
import { useState, useEffect } from "react";
import AuthButton from "@/components/auth-button";
import Image from "next/image";
import { createClient } from "@/lib/superbase/client";

import { User } from "@/utils/types";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="bg-neutral-50/30 px-8 py-3 border-b border-neutral-200  backdrop-blur-lg top-0 sticky z-20 w-full">
      <div className="flex items-center justify-between md:max-w-4xl mx-auto max-w-sm ">
        <div>
          <Image
            src={"/lightlogo.png"}
            alt="logo"
            width={600}
            height={200}
            className="h-4 w-auto"
          />
        </div>
        <div>
          <AuthButton user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
