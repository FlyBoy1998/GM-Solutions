import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

const colors = {
  navy: "#122033",
  orange: "#B9562B",
  peach: "#D9A184",
  text: "#202C3D",
  muted: "#6B7280",
  background: "#F5F4F1",
  white: "#FFFFFF",
  panel: "#F7F6F3",
};

export default function EnquiryConfirmationEmail({ name = "there" }) {
  const firstName = name.trim().split(/\s+/)[0] || "there";

  return (
    <Html lang="en">
      <Head />
      <Preview>
        Thanks for contacting GM Solutions. We've received your enquiry.
      </Preview>

      <Body
        style={{
          margin: 0,
          padding: "20px 0",
          backgroundColor: colors.background,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            backgroundColor: colors.white,
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Section
            style={{
              backgroundColor: colors.navy,
              padding: "28px 32px",
              textAlign: "center",
            }}
          >
            <Img
              src="public-logo-url"
              alt="GM Solutions"
              width="80"
              height="80"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "14px",
              }}
            />

            <div
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                textAlign: "left",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: "27px",
                  fontWeight: "700",
                  margin: "0 0 5px",
                }}
              >
                GM SOLUTIONS
              </Text>
              <Text
                style={{ color: colors.peach, fontSize: "15px", margin: 0 }}
              >
                RENOVATION &amp; PROPERTY IMPROVEMENTS
              </Text>
            </div>
          </Section>

          <Section style={{ padding: "36px 32px 30px" }}>
            <Section
              style={{
                width: "84px",
                height: "84px",
                lineHeight: "84px",
                textAlign: "center",
                backgroundColor: "#FFF0E8",
                borderRadius: "50%",
                marginBottom: "28px",
              }}
            >
              <Text
                style={{
                  color: colors.orange,
                  fontSize: "34px",
                  lineHeight: "84px",
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                ✓
              </Text>
            </Section>

            <Heading
              as="h1"
              style={{
                color: colors.text,
                fontSize: "30px",
                lineHeight: "1.3",
                fontWeight: "700",
                margin: "0 0 26px",
              }}
            >
              Thanks for getting in touch!
            </Heading>

            <Text
              style={{
                color: colors.muted,
                fontSize: "18px",
                lineHeight: "1.7",
                margin: "0 0 24px",
              }}
            >
              Hi {firstName},
            </Text>

            <Text
              style={{
                color: colors.muted,
                fontSize: "18px",
                lineHeight: "1.7",
                margin: "0 0 24px",
              }}
            >
              Thank you for contacting GM Solutions. We've received your enquiry
              and appreciate you considering us for your renovation project.
            </Text>

            <Section
              style={{
                backgroundColor: colors.panel,
                borderRadius: "10px",
                padding: "24px",
                marginBottom: "26px",
              }}
            >
              <Heading
                as="h2"
                style={{
                  color: colors.text,
                  fontSize: "21px",
                  lineHeight: "1.4",
                  margin: "0 0 14px",
                }}
              >
                What happens next?
              </Heading>

              <Text
                style={{
                  color: colors.muted,
                  fontSize: "17px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Our team will review your message and get back to you shortly to
                discuss your requirements and the next steps.
              </Text>
            </Section>

            <Text
              style={{
                color: colors.muted,
                fontSize: "17px",
                lineHeight: "1.7",
                margin: "0 0 32px",
              }}
            >
              If you need to add anything to your enquiry, feel free to contact
              us by email.
            </Text>

            <Hr
              style={{
                borderColor: "#E3E1DC",
                margin: "0 0 28px",
              }}
            />

            <Text
              style={{
                color: colors.text,
                fontSize: "18px",
                lineHeight: "1.5",
                fontWeight: "600",
                margin: "0 0 20px",
              }}
            >
              Kind regards,
            </Text>

            <Text
              style={{
                color: colors.text,
                fontSize: "18px",
                lineHeight: "1.5",
                fontWeight: "600",
                margin: "0 0 26px",
              }}
            >
              The GM Solutions Team
            </Text>

            <Text
              style={{
                color: colors.orange,
                fontSize: "17px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              info@gmsolutions.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
