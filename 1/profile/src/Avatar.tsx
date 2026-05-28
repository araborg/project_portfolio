interface ImageProps {
	src: string;
	alt: string;
	className: string;
}

// An image Component
function Image({ src }: ImageProps) {
	return <img src={src} />;
}

function Avatar() {
	const avatarImg = "/salamino.jpg";

	return <Image src={avatarImg} alt="avatar" className="avatar" />;
}

export default Avatar;
