import List from './list'
import PricingCard from '../shared/card/PricingCard'

export default function PricingCardsConatiner() {
    return (
        <>
            <div className=" flex flex-wrap justify-center 2xl:px-20 mt-20">
                <div className=" lg:flex grid md:grid-cols-2  gap-10 ">
                    <PricingCard
                        type="Starter"
                        price="$0.99"
                        description="Perfect for using in a Starter website or a client project."
                        buttonText="Choose Starter"
                    >
                        <List>10 Images Free</List>
                        <List>24/7 Live Support</List>
                        <List>100% Client</List>
                        <List>1 Day Free Storage</List>
                        <List>Per day 500 images</List>
                        <List>Starting at $1.99</List>
                    </PricingCard>

                    <PricingCard
                        type="Pro"
                        price="$2.50"
                        description="Perfect for using in a Starter website or a client project."
                        buttonText="Choose Business"
                        active
                    >
                        <List>10 Images Free</List>
                        <List>24/7 Live Support</List>
                        <List>100% Client</List>
                        <List>1 Day Free Storage</List>
                        <List>Per day 500 images</List>
                        <List>Starting at $2.99</List>
                    </PricingCard>

                    <PricingCard
                        type="Elite"
                        price="$8.00"
                        description="Perfect for using in a Starter website or a client project."
                        buttonText="Choose Professional"
                    >
                        <List>10 Images Free</List>
                        <List>24/7 Live Support</List>
                        <List>100% Client</List>
                        <List>1 Day Free Storage</List>
                        <List>Per day 500 images</List>
                        <List>Starting at $10.00</List>
                    </PricingCard>
                </div>
            </div>
        </>
    )
}
