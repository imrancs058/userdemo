import { Button } from '@mui/material';
export const OutlinedButton = ({ title }) => {
	return (
		<Button
			sx={{
				padding: '8px 15px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '27px',
				color: '#616161',
				fontSize: '14px',
				fontWeight: '500',
				border: '1px solid #C5C5C5',
				'&:hover': {
					backgroundColor: '#222',
					color: 'white',
					border: '1px solid #222',
				},
				'&:focus': {
					backgroundColor: '#222',
					color: 'white',
					border: '1px solid #222',
				},
			}}
			variant="outlined"
		>
			{title}
		</Button>
	);
};
