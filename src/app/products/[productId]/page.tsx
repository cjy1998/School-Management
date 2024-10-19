import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function ProductDetail({ params }: Props) {
  return (
    <>
      <div>
        <h1>ProductDetail{params.productId}</h1>
      </div>
    </>
  );
}
