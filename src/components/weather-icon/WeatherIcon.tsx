import Image from "next/image";

type WeatherIconProps = {
  icon: string;
  size?: number;
  alt?: string;
  className?: string;
};

export default function WeatherIcon({
  icon,
  size = 42,
  alt = "Weather icon",
  className = "",
}: WeatherIconProps) {
  return (
    <Image
      src={icon}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}