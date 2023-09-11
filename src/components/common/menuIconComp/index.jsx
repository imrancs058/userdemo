import Image from 'next/image';

export const MenuIconComp = ({ icon }) => {
	return (
		<>
			<div className="cursor-pointer mt-2">
				<Image
					src={icon}
					width={24}
					height={24}
					alt=""
				/>
			</div>
		</>
	);
};
