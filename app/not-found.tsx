import Link from "next/link";

export const NotFoundPage = (): JSX.Element => {
	return (
	  <div>
		<h1>Not found – 404!</h1>
		<div>
		  <Link href="/">Go back to Home</Link>
		</div>
	  </div>
	);
};
export default NotFoundPage