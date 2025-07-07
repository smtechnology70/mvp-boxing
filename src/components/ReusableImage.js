import Image from "next/image";

/**
 * ReusableImage - a wrapper for Next.js Image component and HTML <img>
 * Uses <Image> for local/static images, <img> for external URLs.
 * If width/height are not provided, uses 'fill' for Next.js Image and auto for <img>.
 * If 'href' is provided, wraps the image in an <a> tag (opens in new tab for external links).
 */
const isExternal = (src) => {
  return (
    typeof src === "string" &&
    (src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("//"))
  );
};

const ReusableImage = ({
  src,
  alt,
  width,
  height,
  style,
  href,
  dataSrc,
  ...rest
}) => {
  const imgElement = isExternal(src) ? (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        width: width ? width : "100%",
        height: height ? height : "auto",
        ...style,
      }}
      {...rest}
    />
  ) : !width && !height ? (
    <span
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        height: "auto",
      }}
    >
      <Image
        src={src || dataSrc}
        alt={alt || src || ""}
        fill
        style={{ objectFit: "contain" }}
        {...rest}
      />
    </span>
  ) : (
    <Image
      src={src || dataSrc}
      alt={alt || src || ""}
      width={width}
      height={height}
      {...rest}
    />
  );

  if (href) {
    const isHrefExternal =
      typeof href === "string" &&
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//"));
    return (
      <a
        href={href}
        target={isHrefExternal ? "_blank" : undefined}
        rel={isHrefExternal ? "noopener noreferrer" : undefined}
      >
        {imgElement}
      </a>
    );
  }
  return imgElement;
};

export default ReusableImage;
