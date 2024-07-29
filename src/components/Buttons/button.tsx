
import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface PrimaryButtonProps {
	children: ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	children,
}) => {
	return (
		<button className={styles.primary}>
			{children}
		</button>
	);
};



