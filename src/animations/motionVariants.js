// animations/motionVariants.js

// animations/motionVariants.js

// Variants outside the component (or in the same file)
export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const fadeLeft = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.7, 0, 0.4, 1] },
  },
};

export const gridStaggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const arrowHoverVariants = {
  initial: { x: -40, y: 40, opacity: 0 },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

///=================================Feather Animation=======================

// animations.ts

export const featherContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

export const featherItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};
