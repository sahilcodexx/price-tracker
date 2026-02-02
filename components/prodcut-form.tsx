"use client";
import { useState, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const ProductForm = () => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your URL (Amazon,Walmart,Flipkart,...)"
          className="h-12 text-base"
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
  );
};

export default ProductForm;
