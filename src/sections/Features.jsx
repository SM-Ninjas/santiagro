import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";
import FCard from "../cards/FCard";

export default function Features() {
  return (
    <Card className="py-4 px-4 grid grid-cols-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-4xl uppercase font-bold">Our Features</p>
        <h4 className="font-bold text-large">What We Offer</h4>
        <p className="py-9">Santi Agro Farm is Nepal's premier agricultural enterprise dedicated to being the Complete Farming Partner for every cultivator. We provide an integrated ecosystem of quality seeds, specialized feeds, expert services, and direct market connections - empowering Santi-Kisans to achieve sustainable growth and prosperity.</p>
        <Button
          className=" mt-8"
          color="success" variant="flat">Learn More</Button>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <FCard />
      </CardBody>
    </Card>
  );
}