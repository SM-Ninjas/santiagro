import {Button, Card, CardBody, CardFooter, Image} from "@heroui/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "Rs. 80/kg",
    },
    {
      title: "Carrot",
      img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
      price: "Rs. 60/kg",
    },
    {
      title: "Chicken",
      img: "https://images.unsplash.com/photo-1556316918-880f9e893822?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
      price: "Rs. 300/kg",
    },
    {
      title: "Lemon",
      img: "https://images.unsplash.com/photo-1605185189315-fc269c231e41?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb258ZW58MHx8MHx8fDA%3D",
      price: "Rs. 70/kg",
    },
    {
      title: "Avocado",
      img: "https://images.unsplash.com/photo-1620101680137-6620a0e1803f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
      price: "Rs. 350/kg",
    },
    {
      title: "Goat",
      img: "https://images.unsplash.com/photo-1593750439808-958d28558592?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29hdHN8ZW58MHx8MHx8fDA%3D",
      price: "Rs. 650/kg",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-3">
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
          <Button className="m-2" color="success" variant="flat">Add to Cart</Button>
        </Card>
      ))}
    </div>
  );
}
