<template>
    <section class="page mission">
        <h2>Our Mission</h2>
        <div class="mission-content">
            <p>
                The Computer System Institute.inc.. in keeping with its guiding principles in its incorporation, shall
                aim to fulfill the following goals : <br>
                1.To be one with our government in keeping as many Filipinos properly educated regardless of status in
                life, belief, race color or political orientation;<br>
                2. To create an atmosphere of learning conductive to academic excellence ;<br><br>
                3. To maintain high standards in pursuing academic goals, in elevating the welfare of the institute, its
                students, trainers and the academic community ;<br></br>
                4. To focus its resources in helping the less privileged yet deserving students, though scholarships and
                students assistance programs ;<br>
                5. To mold its students into morally upright and responsible citizens who shall hold dearly the true
                value of honest work ;<br>
                6. That these goals shall reinforce the pillars of the institute to stand firm and move on and develop a
                community of learning where everyone shall enjoy equal opportunities that he may be proud if himself as
                a person yet conscious if his responsibilities towards the welfare of his fellow men.<br><br>
            </p>
        </div>
    </section>
</template>

<style scoped>
.mission-content {
    text-align: center;
    animation: slideIn 0.8s ease 0.2s both;
        border-radius: 10px;
    border:  4px solid #667eea;
    padding: 2rem;
}

h2 {
    color: #034d1f;
}

.mission-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
}

.mission-content p {
    line-height: 2;
    color: #3f3902;
    font-size: 1.05rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
} 

.mission-content p br {
    display: block;
    content: "";
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
    .mission-content p {
        font-size: 0.95rem;
        line-height: 1.8;
    }
}
</style>
