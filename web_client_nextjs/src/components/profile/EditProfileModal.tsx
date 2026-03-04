import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import {
    X,
    User,
    Mail,
    Twitter,
    Instagram,
    Linkedin,
    Send,
    Image as ImageIcon,
    AlertTriangle,
    Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: any;
    onSave: (data: any) => void;
    isProcessing?: boolean;
    isRegistered?: boolean;
}

export function EditProfileModal({
    isOpen,
    onClose,
    initialData,
    onSave,
    isProcessing,
    isRegistered
}: EditProfileModalProps) {
    const { t } = useI18n();
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        avatarUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        linkedinUrl: '',
        telegramUrl: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                username: initialData.username || '',
                firstName: initialData.firstName || '',
                lastName: initialData.lastName || '',
                email: initialData.email || '',
                avatarUrl: initialData.avatarUrl || '',
                twitterUrl: initialData.twitterUrl || '',
                instagramUrl: initialData.instagramUrl || '',
                linkedinUrl: initialData.linkedinUrl || '',
                telegramUrl: initialData.telegramUrl || '',
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                {isRegistered ? t.profile.registration.editTitle : t.profile.registration.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-muted transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        {t.profile.registration.username}
                                    </label>
                                    <input
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="WizDev_42"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        {t.profile.registration.email}
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="wizard@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        {t.profile.registration.firstName}
                                    </label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="Merlin"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        {t.profile.registration.lastName}
                                    </label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="The Great"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <ImageIcon className="h-4 w-4" />
                                    {t.profile.registration.avatarUrl}
                                </label>
                                <input
                                    name="avatarUrl"
                                    value={formData.avatarUrl}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="https://ipfs.io/ipfs/..."
                                />
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border">
                                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Social Links</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                            <Twitter className="h-4 w-4" />
                                            {t.profile.registration.twitterUrl}
                                        </label>
                                        <input
                                            name="twitterUrl"
                                            value={formData.twitterUrl}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="https://x.com/wizdev"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                            <Instagram className="h-4 w-4" />
                                            {t.profile.registration.instagramUrl}
                                        </label>
                                        <input
                                            name="instagramUrl"
                                            value={formData.instagramUrl}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="https://instagram.com/wizdev"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                            <Linkedin className="h-4 w-4" />
                                            {t.profile.registration.linkedinUrl}
                                        </label>
                                        <input
                                            name="linkedinUrl"
                                            value={formData.linkedinUrl}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="https://linkedin.com/in/wizdev"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                            <Send className="h-4 w-4" />
                                            {t.profile.registration.telegramUrl}
                                        </label>
                                        <input
                                            name="telegramUrl"
                                            value={formData.telegramUrl}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="t.me/wizdev"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-200/80 leading-relaxed">
                                        {t.profile.registration.gasWarning}
                                    </p>
                                </div>

                                <div className="flex gap-3 justify-end pt-2">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={onClose}
                                        disabled={isProcessing}
                                    >
                                        {t.common.cancel}
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="min-w-[140px]"
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                {t.common.loading}
                                            </>
                                        ) : (
                                            isRegistered ? t.profile.registration.submitUpdate : t.profile.registration.submitRegister
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
