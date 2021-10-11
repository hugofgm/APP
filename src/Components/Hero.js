import { animate, motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-img">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <p className="hero-txt">AS MINHAS VOLTAS AO SOL</p>
        <p className="hero-txt signature">by Raquel Faria</p>
      </motion.div>
    </div>
  );
};

export default Hero;
