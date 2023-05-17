import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";

interface LoginModalProps {

}

const LoginModal = () => {
    const loginModal = useLoginModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true);
            // TODO log in feature
            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">

        </div>
    )
    
    return(
        <div></div>
    );
}

export default LoginModal;