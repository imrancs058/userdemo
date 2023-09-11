'use client';
import { MenuIconComp, SideBarIcon } from '@/components/common';
import { RoundShape } from '@/components/index.jsx';
import { Grid } from '@mui/material';
import Image from 'next/image';
import MicroPhoneSvg from '../../../../public/assets/svgs/microphone.jsx';
import SearchIconSvg from '../../../../public/assets/svgs/search.jsx';
import './styles.css';

export const Sidebar = ({ isOpen, setIsOpen }) => {
	const handleOpenClick = () => setIsOpen(!isOpen);

	return (
		<>
			<div className="flex">
				<Grid
					sx={{
						display: { xs: 'none', sm: 'block' },
					}}
				>
					<div
						style={{
							position: 'fixed',
							height: '100vh',
							display: 'flex',
							justifyContent: 'space-between',
						}}
						className="parentDiv space-y-24 "
					>
						<div>
							<Image
								style={{ margin: 'auto' }}
								src="/assets/images/profile.png"
								alt="Profile Icon"
								width={40}
								height={40}
							/>
							<Image
								className="rightArrow"
								onClick={handleOpenClick}
								src="/assets/icons/rightErrow.jpg"
								alt="Profile Icon"
								width={16}
								height={20}
							/>

							<div className="dCard">
								<p className="d">D</p>
							</div>
							<Image
								style={{ margin: 'auto' }}
								src="/assets/icons/add.jpg"
								alt="Profile Icon"
								width={40}
								height={40}
							/>
						</div>

						<div style={{ position: 'relative' }}>
							<div className="absolute z-50 left-[-28px]  top-[-15px] ">
								{RoundShape}
							</div>
							<MenuIconComp
								icon="/assets/icons/discover.png"
								width={24}
								height={24}
							/>
							<MenuIconComp icon="/assets/icons/folder.png" />
							<MenuIconComp icon="/assets/icons/group.png" />
							<MenuIconComp icon="/assets/icons/wallet.png" />
							<MenuIconComp icon="/assets/icons/notification.png" />
							<MenuIconComp icon="/assets/icons/setting.png" />
						</div>
						<div>
							<MenuIconComp icon="/assets/icons/logout.png" />
						</div>
					</div>
				</Grid>

				<Grid>
					{isOpen && (
						<div
							className={`w-[280px] bg-[#F9F9F9]`}
							style={{ transition: 'height 0.3s' }}
						>
							<div
								className="OverViewList"
								style={{ display: 'flex', justifyContent: 'space-between' }}
							>
								<SideBarIcon src="/assets/icons/category.jpg" />
								<div style={{ display: 'flex' }}>
									<SearchIconSvg />
									<MicroPhoneSvg />
								</div>
							</div>
							{/* ----------overview---------- */}
							<div>
								<p className="overview">Overview</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/activity.png" />
								<p className="listHeading">Recent Videos</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/menu.png" />
								<p className="listHeading">Projects</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/send.png" />
								<p className="listHeading">Collaboraters</p>
								<div style={{ marginLeft: '30px' }}>
									<SideBarIcon src="/assets/icons/Group.jpg" />
								</div>
							</div>
							<p className="verticalLine"></p>
							{/* ----------overview---------- */}
							<div>
								<div>
									<p className="overview">General</p>
								</div>
								<div className="OverViewList">
									<SideBarIcon src="/assets/icons/wallet-2.png" />
									<p className="listHeading">Payment</p>
								</div>
								<div className="OverViewList">
									<SideBarIcon src="/assets/icons/profile.png" />
									<p className="listHeading">Message</p>
								</div>
								<div className="OverViewList">
									<SideBarIcon src="/assets/icons/document.png" />
									<p className="listHeading">News</p>
								</div>
							</div>
							<p className="verticalLine"></p>

							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/notification-bing.png" />
								<p className="listHeading">Notification</p>
							</div>
							<div className="OverViewList">
								<SideBarIcon src="/assets/icons/color.png" />
								<p className="listHeading">Theme</p>
							</div>
						</div>
					)}
				</Grid>
			</div>
		</>
	);
};
