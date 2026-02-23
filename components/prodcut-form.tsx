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

    const result = await addProdcut(formData) as { error?: string; message?: string } | undefined;

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success(result?.message || "Proudct tracked successfully")
      setUrl("")
    }
    setIsLoading(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your URL (Amazon,Walmart,Flipkart,...)"
            className="h-12 text-base bg-white "
            required
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
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
