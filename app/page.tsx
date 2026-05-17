import Banner from "@/components/Homepage/Banner";
import GoogleReviews from "@/components/Homepage/GoogleReview";
import Premises from "@/components/Homepage/Premises";
import TheTeam from "@/components/Homepage/TheTeam";
import TradeIn from "@/components/Homepage/TradeIn";
import Vacancies from "@/components/Homepage/Vacancies";
import VisitUs from "@/components/Homepage/VisitUs";
import WhyUs from "@/components/Homepage/WhyUs";
import { prisma } from "@/lib/prisma";
import { getRandomItems } from "@/lib/utils";

export default async function Home() {

	const cars = await prisma.car.findMany({
		include: {
			car_types: { select: { name: true } },
			car_transmissions: { select: { name: true } },
			car_images: { select: { url: true }, where: { isPrimary: true } },
		}
	})

	const visibleCars = getRandomItems(cars, 6)

	return (
		<main>
			<Banner />
			<Vacancies products={visibleCars} />
			<WhyUs />
			<TheTeam />
			<GoogleReviews />
			<Premises />
			<TradeIn />
			<VisitUs />
		</main>
	);
}
