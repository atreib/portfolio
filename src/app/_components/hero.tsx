import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="w-full py-24 md:py-32 lg:py-40 xl:py-48 from-background to-muted bg-gradient-to-b">
			<div className="container">
				<div className="flex flex-col items-center text-center space-y-8">
					<Image
						src="/icons/andre-treib-high-res-logo-transparent.png"
						alt="Andre Treib"
						width={160}
						height={160}
						priority
						className="h-32 w-auto"
					/>
					<div className="space-y-6 max-w-[900px]">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Senior Product Engineer
						</h1>
						<p className="mx-auto max-w-[760px] text-muted-foreground md:text-xl/relaxed">
							AI-native product engineer with 11 years of experience shipping
							end-to-end solutions.
						</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Button variant="default" asChild>
							<Link href="#experience" prefetch={false}>
								See experience
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="#portfolio" prefetch={false}>
								See projects
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="#contact" prefetch={false}>
								Get in touch
							</Link>
						</Button>
					</div>
					<div className="pt-8">
						<ChevronDownIcon className="w-12 h-12 animate-bounce" />
					</div>
				</div>
			</div>
		</section>
	);
}
