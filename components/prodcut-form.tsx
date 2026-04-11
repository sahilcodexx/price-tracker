"use client";
import { useState, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import AuthModel from "./authmodel";
import { User } from "@/utils/types";
import { addProdcut } from "@/app/actions";
import { toast } from "sonner";

const ProductForm = ({ user }: { user?: User | null }) => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAuthModel, setShowAuthModel] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      setShowAuthModel(true);
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("url", url);

    const result = (await addProdcut(formData)) as
      | { error?: string; message?: string }
      | undefined;

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success(result?.message || "Proudct tracked successfully");
      setUrl("");
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row gap-2 bg-white relative border-transparent border ring ring-neutral-300/50 shadow-sm  rounded-full max-w-sm md:max-w-lg m-auto">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL (Amazon,Walmart,Flipkart,...)"
            className="h-15 text-base border-none shadow-none pl-5 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-transparent focus-visible:border-transparent "
            required
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-linear-to-b from-blue-500 text-xs to-blue-700 px-4 h-10 md:h-12 absolute right-2 md:top-1.5 top-2.5 rounded-full "
            size="sm"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>
      <AuthModel
        isOpen={showAuthModel}
        onClose={() => setShowAuthModel(false)}
      />
    </>
  );
};

export default ProductForm;
