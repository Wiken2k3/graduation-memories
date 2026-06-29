import Container from "@/components/layout/Container";
import Divider from "@/components/ui/Divider";

const sections = [
  "Bốn năm.",
  "Hàng nghìn kỷ niệm.",
  "Có những người chỉ gặp một lần.",
  "Có những người mình sẽ nhớ rất lâu.",
  "Biết đâu...",
  "Cậu là một trong số đó.",
];

export default function Story() {
  return (
    <section className="bg-[#FFFDF8] py-36">
      <Container>
        <div className="space-y-56">
          {sections.map((text, index) => (
            <div key={text}>
              <div className="flex min-h-[75vh] items-center justify-center">
                <h2
                  className="
                    max-w-4xl
                    text-center
                    text-5xl
                    font-medium
                    leading-tight
                    tracking-tight
                    md:text-7xl
                  "
                  style={{
                    color: index % 2 === 0 ? "#272727" : "#7298C7",
                  }}
                >
                  {text}
                </h2>
              </div>

              {/* Divider (not after last item) */}
              {index !== sections.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}