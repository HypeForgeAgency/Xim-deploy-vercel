import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, description2, description3, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-0">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
          {description2 && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description2}</p>
          )}
          {description3 && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description3}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288,rgba(97, 88, 88, 0.15))`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Switch Now</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-['Benzin-Bold'] gap-10 uppercase text-2xl text-white">
          Into the Xim Vision.
        </p>
        <p className="max-w-2xl text-white font-['Benzin-Regular'] text-lg opacity-90">
          Immerse yourself in a rich and ever-expanding universe where you get vibrant
          amount of packages with unlimited converge and seemless connectivity into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt className="border-hsla text-white relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Unmatched Coverage
            </>
          }
          description="Powered by Maxis
Experience superior network quality"
          description2="Nationwide Reach
Stay connected wherever you are"
          description3="Reliable & Fast
Enjoy seamless connectivity anytime"
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 text-white row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/new2.mp4"
            title={
              <>
                Effortless Switching
              </>
            }
            description="Quick Plan Selection
Choose the perfect plan in minutes"
            description2="Instant eSIM Activation
No waiting, start using immediately"
            description3="Seamless Transition
Switch without any hassle or downtime"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 text-white row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
Unbeatable Value for Money              </>
            }
            description="Plans from RM5/month
Affordable pricing without compromising quality"
                      description2="Maximum Savings
Get more for less, with plans that fit your budget"
                      description3="Exceptional Service
Premium features at budget-friendly rates"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 text-white me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Contract-Free Flexibility
              </>
            }
            description="No Commitments
Freedom to switch or cancel anytime"
                      description2="Hassle-Free Plans
No strings attached, just pure convenience"
                      description3="Stay in Control
You decide how long you stay"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/world.mp4"
            loop
            muted
            autoPlay
            className="size-[30vh] object-cover ml-40 mt-20 object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
