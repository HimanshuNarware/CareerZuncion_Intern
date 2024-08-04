import { React, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 30px; /* Increased margin for more spacing */
  text-align: left;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px; /* Increased margin for more spacing */
  color: white;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px; /* Increased margin for more spacing */
  justify-content: left;
  padding: 0;
  color: #8a2be2;
`;

const Footer = styled.div`
  margin-top: 40px; /* Added margin for spacing before the footer */
  color: white;
  text-align: center;
`;

const LastUpdate = styled.div`
  margin-bottom: 14px;
  font-size: 17px;
  color: white;
  margin-top: 40px;
  margin-bottom: 0px;
`;

const LastUpdatedDate = styled.span`
  font-size: 17px;
  color: white;

  
`;

const Licensing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLastUpdatedDate = () => {
          const dateElement = document.getElementById("last-updated-date");
          if (!dateElement) {
            console.error("Element with ID 'last-updated-date' not found.");
            return;
          }
          const now = new Date();
          const day = now.getDate();
          const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          const month = monthNames[now.getMonth()]; // Get the full month name
          const year = now.getFullYear();
          dateElement.textContent = `${month} ${day}, ${year}`;
        };
    
        const updateWeekly = () => {
          const now = new Date();
          const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
          const timeUntilNextUpdate = (7 - dayOfWeek) * 24 * 60 * 60 * 1000; // Time until next Sunday
          updateLastUpdatedDate();
          setTimeout(updateWeekly, timeUntilNextUpdate);
        };
    
        updateWeekly();

    }, []);

    return (
        <Container>
            <Title>Licensing</Title>
            <Paragraph>Welcome to CareerZunction! This website is licensed under the MIT License. This page outlines the terms of the license and provides details on how you can use, modify, and distribute our software.</Paragraph>
            <Subtitle>MIT License</Subtitle>
            <Paragraph>Copyright (c) 2024 CareerZunction</Paragraph>
            <Paragraph>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </Paragraph>
            <Paragraph>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
            </Paragraph>
            <Paragraph>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </Paragraph>
            <Subtitle>Contact Information</Subtitle>
            <Footer>
                If you have any questions or concerns about this licensing agreement, please contact us at Email: <a href="mailto:careerzunction@gmail.com" style={{ color: 'white' }}>careerzunction@gmail.com</a>
                
            </Footer>
            <Paragraph>
            <div className="Lastupdate">
                    Last updated: <span id="last-updated-date"></span>
                </div>
            </Paragraph>
            
        </Container>
    );
};

export default Licensing;
