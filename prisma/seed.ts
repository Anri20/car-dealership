import "dotenv/config"
import { PrismaClient } from "../lib/generated/prisma"
import bcrypt from "bcrypt"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
    const hashed = await bcrypt.hash("1234567890", 10)
    const carDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    await prisma.user.create({
        data: {
            username: "test",
            email: "hjayanata@gmail.com",
            password: hashed,
        }
    })

    await prisma.carType.createMany({
        data: [
            { name: "Electric" },
            { name: "Hybrid" },
            { name: "Diesel" },
            { name: "Gasoline" },
        ]
    })

    await prisma.carTransmission.createMany({
        data: [
            { name: "Automated" },
            { name: "Manual" },
        ]
    })

    await prisma.car.createMany({
        data: [
            {
                type_id: 3,
                transmission_id: 1,
                name: "Volvo XC-60",
                desc: carDescription,
                year: 2021,
                odometer: 42_000,
                price: 469_900_000,
                credit: 6_490_000,
                created_by: 1,
            },
            {
                type_id: 1,
                transmission_id: 1,
                name: "Kia e-Soul",
                desc: carDescription,
                year: 2020,
                odometer: 55_000,
                price: 184_900_000,
                credit: 2_790_000,
                created_by: 1,
            },
            {
                type_id: 4,
                transmission_id: 1,
                name: "MINI Countryman",
                desc: carDescription,
                year: 2018,
                odometer: 67_000,
                price: 209_900_000,
                credit: 3_190_000,
                created_by: 1,
            },
            {
                type_id: 3,
                transmission_id: 1,
                name: "Skoda Octavia",
                desc: carDescription,
                year: 2017,
                odometer: 95_000,
                price: 134_900_000,
                credit: 2_090_000,
                created_by: 1,
            },
            {
                type_id: 3,
                transmission_id: 1,
                name: "Audi A4 Allroad",
                desc: carDescription,
                year: 2016,
                odometer: 98_000,
                price: 189_900_000,
                credit: 2_890_000,
                created_by: 1,
            },
            {
                type_id: 3,
                transmission_id: 2,
                name: "Ford S-Max",
                desc: carDescription,
                year: 2016,
                odometer: 112_000,
                price: 199_900_000,
                credit: 3_090_000,
                created_by: 1,
            },
            {
                type_id: 4,
                transmission_id: 1,
                name: "Ford Kuga",
                desc: carDescription,
                year: 2016,
                odometer: 89_000,
                price: 174_900_000,
                credit: 2_690_000,
                created_by: 1,
            },
            {
                type_id: 4,
                transmission_id: 2,
                name: "Volkswagen Golf",
                desc: carDescription,
                year: 2015,
                odometer: 88_000,
                price: 119_900_000,
                credit: 1_890_000,
                created_by: 1,
            },
            {
                type_id: 3,
                transmission_id: 1,
                name: "Volvo V60",
                desc: carDescription,
                year: 2015,
                odometer: 101_000,
                price: 154_900_000,
                credit: 2_390_000,
                created_by: 1,
            },
            {
                type_id: 3,
                transmission_id: 2,
                name: "Volvo V40",
                desc: carDescription,
                year: 2014,
                odometer: 134_000,
                price: 99_900_000,
                credit: 1_590_000,
                created_by: 1,
            },
            {
                type_id: 4,
                transmission_id: 2,
                name: "Ford B-Max",
                desc: carDescription,
                year: 2013,
                odometer: 138_000,
                price: 69_900_000,
                credit: 1_190_000,
                created_by: 1,
            },
        ]
    })

    await prisma.carImage.createMany({
        data: [
            { car_id: 1, url: "b62e82_5557bab787034a2b9b807e5ec42d0f3b~mv2.jpg", isPrimary: true },
            { car_id: 2, url: "b62e82_f78e1f73f17a4e3e8a6bcef8fdab86c3~mv2.avif", isPrimary: true },
            { car_id: 3, url: "b62e82_079e5efd695847d2ab61b629505ae7a8~mv2.avif", isPrimary: true },
            { car_id: 4, url: "b62e82_98aabf32de6b471da61ad3e685c0c194~mv2.jpg", isPrimary: true },
            { car_id: 5, url: "b62e82_b3a95dd90aec4eb3a286b5ae5fe9a293~mv2.avif", isPrimary: true },
            { car_id: 6, url: "b62e82_3855b1d39bee496fb2bb59a28d43534e~mv2.jpg", isPrimary: true },
            { car_id: 7, url: "b62e82_f1194f7c6dc84915bdc8323d036d01e0~mv2.jpg", isPrimary: true },
            { car_id: 8, url: "b62e82_f7ac3e151e1340a4a6a366778b62c4fc~mv2.avif", isPrimary: true },
            { car_id: 9, url: "b62e82_78cd0d2ed35642a9a7a03b4ae2d0fe80~mv2.avif", isPrimary: true },
            { car_id: 10, url: "b62e82_0c2a28bd41e345f9a610ec136051a6da~mv2.jpg", isPrimary: true },
            { car_id: 11, url: "b62e82_78aeafa357994334b17b52b955738277~mv2.jpg", isPrimary: true },
        ]
    })

    console.log("Seeded!")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())