import { Body, Button, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface QuestionEmailProps {
  senderEmail?: string;
  senderName?: string;
  company?: string;
  phone?: string;
  message?: string;
  budget?: string;
}

const defaultSenderEmail = "no-reply@example.com";
const defaultName = "No name provided.";
const defaultCompany = "No company provided.";
const defaultPhone = "No phone number provided.";
const defaultMessage = "No message provided.";
const defaultBudget = "No budget specified.";
const baseUrl = process.env.SITE_URL ? process.env.SITE_URL : '';

export default function QuestionEmail({
  senderEmail = defaultSenderEmail,
  senderName = defaultName,
  company = defaultCompany,
  phone = defaultPhone,
  message = defaultMessage,
  budget = defaultBudget,
}: QuestionEmailProps) {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mona+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Preview style={preview}>New Contact Form Submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`${baseUrl}/hestia.png`}  
              width="auto"
              height="64"
              alt="Company Logo"
              style={logo}
            />
            <Text style={heading}>New Contact Form Submission</Text>
            <Text style={text}><strong>Name:</strong> {senderName}</Text>
            <Text style={text}><strong>Email:</strong> {senderEmail}</Text>
            <Text style={text}><strong>Company:</strong> {company}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Message:</strong> {message}</Text>
            <Text style={text}><strong>Budget:</strong> ${budget}</Text>
            <Section style={buttonContainer}>
              <Button style={button} href={`mailto:${senderEmail}`}>
                Reply to {senderEmail}
              </Button>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const preview = {
  backgroundColor: "#1A1A1A", // Dark gray background for preview
  color: "#FFFFFF", // White text
  fontSize: "20px",
  fontFamily: "'Mona Sans', sans-serif",
  padding: "20px",
};

const main = {
  backgroundColor: "#1A1A1A", // Dark gray background
  color: "#FFFFFF", // White text for contrast
  fontFamily: "'Mona Sans', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  backgroundColor: "#333333", // Slightly lighter dark gray container background
  borderRadius: "10px", // Rounded corners for a modern look
};

const logo = {
  display: "block",
  margin: "0 auto 20px",
};

const heading = {
  fontSize: "32px",
 
  marginBottom: "40px",
  color: "#FFFFFF", // White text for the heading
  textAlign: "center" as const,
  fontFamily: "'Mona Sans', sans-serif",
};

const text = {
  fontSize: "18px",
  margin: "10px 0",
  color: "#FFFFFF", // White text for body content
  fontFamily: "'Mona Sans', sans-serif",
};

const buttonContainer = {
  marginTop: "40px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#FFFFFF", // White button for contrast
  color: "#1A1A1A", // Dark text for the button
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "5px",
  display: "inline-block",
 
  fontFamily: "'Mona Sans', sans-serif",
};
