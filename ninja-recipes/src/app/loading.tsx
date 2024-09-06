import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {/*this is just a string of like 9 characters*/}
                {"abcdefghi".split('').map(i => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>

    )
}