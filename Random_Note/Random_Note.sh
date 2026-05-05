curl -L https://github.com/bootdotdev/worldbanc/archive/refs/heads/main.zip -o worldbanc.zip



I think the most important thing about planning for any software is (inputs, outputs, errors, security)
so let's start with Planing for api endpoint because this is where the action happened ,

# // # =============================================================
In backend engineering, 
the Layered Build Strategy (commonly known as N-Layered Architecture or Controller-Service-Repository Pattern) 
is a structural design pattern. 
It organizes a backend codebase into distinct horizontal layers, 
where each layer has one specific responsibility and can only communicate with the layer directly below it.

the Layered Build Strategy
The Strategy: I want to build the logic from the inside out.
1. We will start by defining the Data Models/Schemas.
2. Then, we will build and test all Services (Business Logic) in isolation.
3. Only once the Services are 100% complete will we move to the Controllers (API Layer).
