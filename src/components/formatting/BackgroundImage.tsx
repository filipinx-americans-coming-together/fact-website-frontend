interface BackgroundImageProps {
  imageURL: string;
  children: any;
}

/**
 * Background image, takes up width/height of the screen
 * @param imageURL url for image
 * @param children
 * @returns BackgroundImage component
 */
export default function BackgroundImage({
  imageURL,
  children,
}: BackgroundImageProps) {
  return (
    <div className="relative h-screen w-screen">
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
