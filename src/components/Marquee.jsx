import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
            className="text-[22vw] leading-none font-founders uppercase -mt-6"
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
