import Image from "next/image";
import Header from "../Header";

const MetroPass = () => {
    return (
        <div>
            <Header title="Metro Pass" />

            <div className="pt-20">
                <div className="flex justify-center items-center">
                    <Image
                        src="/bkash_logo.png"
                        alt="Bkash"
                        width={200}
                        height={200}
                    />
                </div>

                <p className="text-base leading-6 text-gray-700 mt-8">
                    To pay for your Metro Pass using bKash, please open the bKash app on your phone and send the payment to the following number:   <strong className="text-lg font-bold text-gray-900 mt-2">01751624264</strong>
                </p>
            </div>
        </div>
    );
};

export default MetroPass;
