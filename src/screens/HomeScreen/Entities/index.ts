export interface EnterpriseProps {
    id: number,
    email_enterprise?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    linkedin?: string | null,
    phone?: string | null,
    own_enterprise: boolean,
    enterprise_name: string,
    photo: string,
    description: string
    city: string,
    country: string,
    value: number,
    share_price: number,
    enterprise_type: EnterpriseTypeProps
}

interface EnterpriseTypeProps {
    id: number
    enterprise_type_name: string
}