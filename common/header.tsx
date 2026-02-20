"use client";
import { useState, useEffect } from "react";
import AuthButton from "@/components/auth-button";
import Image from "next/image";
import { createClient } from "@/lib/superbase/client";

import { User } from "@supabase/supabase-js";

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
    <header className="bg-white/60 px-8 py-3 rounded-xl shadow-sm border-transparent ring ring-neutral-200 backdrop-blur-lg flex items-center justify-between md:max-w-5xl mx-auto max-w-sm top-5 sticky z-20 ">
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
    </header>
  );
};

export default Header;
