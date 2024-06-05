import { notFound } from "next/navigation";

export default function ReviewPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
    if(parseInt(params.reviewId)>200){
        notFound()
    
    }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}
