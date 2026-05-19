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

	const randomIds = await prisma.$queryRaw<{ id: number }[]>`
		SELECT id FROM master_cars ORDER BY RANDOM() LIMIT 6
	`

	const cars = await prisma.master_cars.findMany({
		where: {
			id: { in: randomIds.map(r => r.id) }
		},
		include: {
			car_types: { select: { name: true } },
			car_transmissions: { select: { name: true } },
			car_images: { select: { url: true }, where: { isPrimary: true } },
		}
	})

	return (
		<main>
			<Banner />
			<Vacancies products={cars} />
			<WhyUs />
			<TheTeam />
			<GoogleReviews />
			<Premises />
			<TradeIn />
			<VisitUs />
		</main>
	);
}
