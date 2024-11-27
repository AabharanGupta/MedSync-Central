from dotenv import load_dotenv
load_dotenv()

import streamlit as st
import os
import google.generativeai as genai

# Set up the Google Generative AI API key
genai.configure(api_key="AIzaSyCcfuPDKQ5p7pToYCQT59CaUtC77i_WIho")

# Function to load gemini pro model and get response
model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

def get_gemini_response(question):
    """Get response from Gemini model"""
    response = chat.send_message(question, stream=True)
    return response


# Define a simulated database of doctors
doctors_db = [
    {"name": "Dr. John Smith", "specialty": "Cardiologist", "phone": "+1234567890", "email": "john.smith@hospital.com"},
    {"name": "Dr. Alice Brown", "specialty": "Neurologist", "phone": "+9876543210", "email": "alice.brown@hospital.com"},
    {"name": "Dr. David Lee", "specialty": "Orthopedic", "phone": "+1928374650", "email": "david.lee@hospital.com"},
    {"name": "Dr. Emily White", "specialty": "Dermatologist", "phone": "+1122334455", "email": "emily.white@hospital.com"},
    {"name": "Dr. Michael Green", "specialty": "Pediatrician", "phone": "+9988776655", "email": "michael.green@hospital.com"}
]

# Disease information, prevention, and remedies
disease_info = {
    "back pain": {
        "information": "Back pain is a common condition that can affect people of all ages. It is often caused by poor posture, lifting heavy objects improperly, or sudden movements.",
        "prevention": "To prevent back pain, practice good posture, avoid heavy lifting, and engage in regular exercise to strengthen back muscles. Stretching and yoga can also be helpful.",
        "remedies": "Over-the-counter pain relievers, rest, and ice or heat therapy may help alleviate back pain. Consult a doctor for severe or persistent pain."
    },
    "fever": {
        "information": "Fever is a common symptom of many illnesses, ranging from simple viral infections to more serious conditions like pneumonia or malaria.",
        "prevention": "Preventing fever involves proper hygiene, such as handwashing, and getting vaccinated against certain illnesses. Rest, hydration, and avoiding exposure to infected individuals can help prevent fever.",
        "remedies": "Rest, drinking plenty of fluids, and taking fever-reducing medications (e.g., acetaminophen or ibuprofen) can help manage fever. See a doctor if the fever persists or is very high."
    },
    "headache": {
        "information": "Headaches can be caused by a variety of factors, including stress, dehydration, poor posture, or underlying medical conditions like migraines or tension headaches.",
        "prevention": "To prevent headaches, stay hydrated, manage stress, maintain good posture, and avoid known triggers (e.g., bright lights, loud noises, etc.). Regular sleep and a healthy diet may also help.",
        "remedies": "Over-the-counter pain medications (e.g., ibuprofen or aspirin) can help relieve headaches. If headaches are frequent or severe, consult a doctor for further evaluation."
    },
    # Add more diseases as needed
}

# Disease-to-specialty recommendation function
def recommend_doctor(disease):
    disease = disease.lower()
    specialties = {
        "back pain": ["Orthopedic", "Physiotherapist"],
        "fever": ["General Physician", "Infectious Disease Specialist"],
        "headache": ["Neurologist"]
    }
    
    # Find relevant specialties
    if disease in specialties:
        specialty_list = specialties[disease]
    else:
        return "Sorry, no specialties found for the disease you mentioned."

    recommended_doctors = [doctor for doctor in doctors_db if doctor["specialty"] in specialty_list]
    if not recommended_doctors:
        return "Sorry, no doctors found for this disease."

    recommendations = []
    for doctor in recommended_doctors:
        recommendations.append(f"Name: {doctor['name']}\nSpecialty: {doctor['specialty']}\nPhone: {doctor['phone']}\nEmail: {doctor['email']}\n")
    return "\n".join(recommendations)


# Initialize streamlit app
st.set_page_config(page_title="MediBot")
st.header("MediBots")

# Initialize session state for chat history if it doesn't exist
if 'chat_history' not in st.session_state:
    st.session_state['chat_history'] = []

input = st.text_input("Input:", key="input")
submit = st.button("Ask the question")

if submit and input:
    disease_keywords = list(disease_info.keys())
    matching_disease = None
    
    # Check if the query contains a disease
    for disease in disease_keywords:
        if disease in input.lower():
            matching_disease = disease
            break

    if matching_disease:
        # Get disease info, prevention, remedy, and doctor recommendations
        disease_data = disease_info[matching_disease]
        doctor_info = recommend_doctor(matching_disease)

        # Format the response to include disease info, prevention, remedy, and doctor recommendations
        response = {
            "disease_info": disease_data["information"],
            "prevention": disease_data["prevention"],
            "remedies": disease_data["remedies"],
            "doctor_recommendations": doctor_info
        }
        
        # Display response
        st.session_state['chat_history'].append(("You", input))
        st.subheader("The response is:")
        st.write(f"**Disease Information:**\n{response['disease_info']}")
        st.write(f"**Prevention:**\n{response['prevention']}")
        st.write(f"**Remedies:**\n{response['remedies']}")
        st.write(f"**Doctor Recommendations:**\n{response['doctor_recommendations']}")
        
        st.session_state['chat_history'].append(("Bot", f"{response['disease_info']}\n{response['prevention']}\n{response['remedies']}\n{response['doctor_recommendations']}"))
        
    else:
        # If no disease found, use Gemini LLM for a generic response
        response = get_gemini_response(input)
        st.session_state['chat_history'].append(("You", input))
        st.subheader("The response is:")
        for chunk in response:
            st.write(chunk.text)
            st.session_state['chat_history'].append(("Bot", chunk.text))

# Display chat history
# for role, text in st.session_state['chat_history']:
#     st.write(f"{role}: {text}")
