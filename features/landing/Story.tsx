import Container from "@/components/layout/Container";
import PageReveal from "../../components/ui/PageReveal";

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
    <section
      id="story-book"
      className="bg-[#FFFDF8]"
    >

      {sections.map((text, index) => (

        <PageReveal
          key={text}
          background={
            [
              "#FFFDF9",
              "#FCFAF5",
              "#F9F7F2",
              "#F7F5EF",
              "#F6F4EE",
              "#F5F1E6",
            ][index]
          }
        >

          <section
            className="
              flex

              min-h-[55vh]

              sm:min-h-[65vh]

              lg:min-h-[75vh]

              items-center

              overflow-hidden
            "
          >

            <Container>

              <h2
                className="
                  mx-auto

                  max-w-5xl

                  text-center

                  text-3xl

                  sm:text-5xl

                  lg:text-7xl

                  font-light

                  leading-[1.15]

                  tracking-[-0.03em]
                "

                style={{
                  color:
                    index % 2 === 0
                      ? "#272727"
                      : "#7298C7",
                }}
              >

                {text}

              </h2>

            </Container>

          </section>

        </PageReveal>

      ))}

    </section>
  );
}