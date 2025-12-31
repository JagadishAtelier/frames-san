import { motion, useTransform } from "framer-motion";

const AnimatedWords = ({
  text,
  progress,
  limit = 0.4,
  startOffset = 0,
  className = ""
}) => {
  const words = text.split(" ");

  return (
    <p className="flex flex-wrap gap-x-2 overflow-hidden">
      {words.map((word, i) => {
        const start = startOffset + (i / words.length) * limit;
        const end = start + 0.05;

const x = useTransform(progress, [start, end], [150, 0]);


        const opacity = useTransform(progress, [start, end], [0, 1]);

        const isSymbol = word === "&";

        return (
          <motion.span
            key={i}
            style={{ x, opacity }}
            className={`inline-block ${
              isSymbol ? "text-white text-2xl md:text-7xl font-semibold mt-2" : className
            }`}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </p>
  );
};



export default AnimatedWords;
