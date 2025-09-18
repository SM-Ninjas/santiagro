import {Card, CardBody, CardFooter, Image} from "@heroui/react";

export default function App() {
  const list = [
    {
      title: "Crop Production",
      img: "https://plus.unsplash.com/premium_photo-1661932971080-c6ec2a91f64c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvcCUyMHByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Dairy Products",
      img: "https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFpcnklMjBwcm9kdWN0c3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Organic Farming",
      img: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Agritourism",
      img: "https://images.unsplash.com/photo-1756456733693-3ade226300ad?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFncml0b3VyaXNtfGVufDB8fDB8fHww",
    },
    {
      title: "Feeding",
      img: "https://images.unsplash.com/photo-1718469053701-f1b7de7306da?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlZWRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Irrigation",
      img: "https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXJyaWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
