<template>
    <section class="page vision">
        <h2>Our Vision</h2>
        <div class="vision-content">
            
            <p>
                The Computer System Institute,inc,firmly believing in the basic tenet of “Equality of Men”. envisions to
                create an institution of learning where everyone shall shall be given equal opportunities in his pursuit
                of academic goals, pursuant to accepted norms, with freedom dignity, yet fully conscious of one’s
                responsibilities and dully respecting others’ rights and ever conscious of his moral obligation to God,
                himself, his family and the community around him.


            </p>
        </div>
    </section>
</template>

<style scoped>
.vision-content {
    text-align: center;
    animation: fadeInUp 0.8s ease 0.2s both;
}

.vision-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: pulse 2s ease-in-out infinite;
}

.vision-content p {
    line-height: 1.9;
    color: #555;
    font-size: 1.1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    padding: 2rem;
    border-radius: 10px;
    border:  4px solid #667eea;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .vision-content p {
        font-size: 0.95rem;
        line-height: 1.7;
        padding: 1.5rem;
    }
}
</style>
