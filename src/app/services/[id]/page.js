"use client"
import { useParams } from "next/navigation";

// json data of services
import services from '/public/assect/json/services.json'

// Components
import SingleServiceLeft from "@/components/services/singleServiceLeft";
import SingleServiceRight from "@/components/services/singleServiceRight";

const SingleService = () => {
    const Id = useParams()
    const singleService = services.find(s => s.slug == Id?.id);

    return (
        <div className=" lg:flex 2xl:gap-20 my-14 xl:gap-14 gap-8">
            <SingleServiceLeft singleService={singleService} />
            <SingleServiceRight singleService={singleService} />
        </div>
    );
};

export default SingleService;
