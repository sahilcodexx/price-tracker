"use client";
import { deleteProduct } from "@/app/actions";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  TrendingDown,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import PriceChart from "./price-chart";
import { Product } from "@/utils/types";

const ProductCard = ({ prodcut }: { prodcut: Product }) => {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Removing this product form tracking")) return;

    setDeleting(true);
    const result = await deleteProduct(prodcut.id);

    if ("error" in result && result.error) {
      toast.error(result.error);
    } else {
      toast.success("Product deleted successfully");
    }
    setDeleting(false);
  };

  return (
    <div>
      <Card>
        <CardHeader className="pb-3 flex">
          <div className="flex gap-4">
            {prodcut.image_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={prodcut.image_url}
                alt={prodcut.name}
                className="w-30 h-30 object-cover rounded-md border"
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-900 line-clamp-2 mb-2">
              {prodcut.name}
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-orange-500">
                {prodcut.currency} {prodcut.current_price}
              </span>
              <Badge variant="secondary" className="gap-1">
                <TrendingDown className="w-3 h-3" />
                Tracking
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChart(!showChart)}
            >
              {showChart ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Chart
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Chart
                </>
              )}
            </Button>
            <Button className="gap-1" asChild variant="outline" size="sm">
              <Link
                href={prodcut.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                view product
              </Link>
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
            >
              Remove
            </Button>
          </div>
        </CardContent>
        {showChart && (
          <CardFooter>
            <PriceChart productId={prodcut.id} />
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProductCard;
