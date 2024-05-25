interface BackgroundImageProps {
  imageURL: string;
  children: any;
}

export default function BackgroundImage({
  imageURL,
  children,
}: BackgroundImageProps) {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
