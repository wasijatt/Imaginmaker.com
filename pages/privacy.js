import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-gray-400 w-full">
                <div className="max-w-4xl mx-auto px-9 py-8 md:px-6 lg:px-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Image
                                src="/privacy/privacy1.svg"
                                alt="Privacy Policy Logo"
                                width={48}
                                height={48}
                                className="rounded"
                            />
                            <h1 className="md:text-2xl font-semibold text-white">Privacy Policy</h1>
                        </div>

                        <section className="space-y-4">

                            <p>
                                The Privacy Policy for this website and services or the collection, use and disclosure of Your information
                                when You use the Service and tells You about Your privacy rights and how the law protects You.
                            </p>
                            <p>
                                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                                collection and use of information in accordance with this Privacy Policy.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Interpretation</h2>
                            <p>
                                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                                The following definitions shall have the same meaning regardless of whether they appear in singular or
                                plural.
                            </p>

                            <div className="space-y-2">
                                <p className="font-semibold">Definitions:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>For the purposes of this Privacy Policy:</li>
                                    <li>
                                        <span className="font-semibold">Account</span> means a unique account created for You to access our
                                        Service or parts of our Service.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Company</span> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                                        &quot;Our&quot; in this Agreement) refers to Your Company.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Cookies</span> are small files that are placed on Your computer,
                                        mobile device or any other device by a website, containing the details of Your browsing history on
                                        that website among its many uses.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Country</span> refers to: United States
                                    </li>
                                    <li>
                                        <span className="font-semibold">Device</span> means any device that can access the Service such as a
                                        computer, a cellphone or a digital tablet.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Disclosure of Your Personal Data</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg text-white font-semibold">Business Transactions</h3>
                                <p>
                                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
                                    transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a
                                    different Privacy Policy.
                                </p>

                                <h3 className="text-lg text-white font-semibold">Law enforcement</h3>
                                <p>
                                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to
                                    do so by law or in response to valid requests by public authorities (e.g. a court or a government
                                    agency).
                                </p>

                                <h3 className="text-lg text-white font-semibold">Other legal requirements</h3>
                                <p>
                                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Comply with a legal obligation</li>
                                    <li>Protect and defend the rights or property of the Company</li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>Protect the personal safety of Users of the Service or the public</li>
                                    <li>Protect against legal liability</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Security of Your Personal Data</h2>
                            <p>
                                The security of Your Personal Data is important to Us, but remember that no method of transmission over
                                the Internet, or method of electronic storage is 100% secure. While We strive to use commercially
                                acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Children&apos;s Privacy</h2>
                            <p>
                                Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                                identifiable information from anyone under the age of 13. If You are a parent or guardian and You are
                                aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We
                                have collected Personal Data from anyone under the age of 13 without verification of parental consent, We
                                take steps to remove that information from Our servers.
                            </p>
                            <p>
                                If We need to rely on consent as a legal basis for processing Your information and Your country requires
                                consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Links to Other Websites</h2>
                            <p>
                                Our Service may contain links to other websites that are not operated by Us. If You click on a third party
                                link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy
                                of every site You visit.
                            </p>
                            <p>
                                We have no control over and assume no responsibility for the content, privacy policies or practices of any
                                third party sites or services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Changes to this Privacy Policy</h2>
                            <p>
                                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
                                Privacy Policy on this page.
                            </p>
                            <p>
                                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                                effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
                            </p>
                            <p>
                                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
                                are effective when they are posted on this page.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>By email: privacy@company.com</li>
                                <li>By visiting this page on our website: www.company.com/contact</li>
                                <li>By phone number: +1 234 567 8900</li>
                                <li>By mail: 123 Privacy Street, City, State 12345</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">Your Rights Under the GDPR</h2>
                            <p>
                                If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data
                                protection rights, covered by GDPR.
                            </p>
                            <p>
                                We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal
                                Data.
                            </p>
                            <p>
                                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
                                systems, please contact us.
                            </p>
                            <p>In certain circumstances, you have the following data protection rights:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The right to access, update or to delete the information we have on you</li>
                                <li>The right of rectification</li>
                                <li>The right to object</li>
                                <li>The right of restriction</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="md:text-2xl font-semibold text-white">California Privacy Rights (CCPA)</h2>
                            <p>
                                If you are a California resident, you are entitled to learn what data we collect about you, ask to delete
                                your data and not to sell (share) it. To exercise your data protection rights, you can make certain
                                requests and ask us:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>What personal information we have about you. If you make this request, we will return to you:</li>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>The categories of personal information we have collected about you</li>
                                    <li>The categories of sources from which we collect your personal information</li>
                                    <li>The business or commercial purpose for collecting or selling your personal information</li>
                                    <li>The categories of third parties with whom we share personal information</li>
                                    <li>The specific pieces of personal information we have collected about you</li>
                                </ul>
                                <li>
                                    To delete your personal information. If you make this request, we will delete the personal information we
                                    hold about you as of the date of your request from our records and direct any service providers to do the
                                    same. In some cases, deletion may be accomplished through de-identification of the information.
                                </li>
                                <li>
                                    To stop selling your personal information. We don&apos;t sell or rent your personal information to any third
                                    parties for any purpose. We do not sell your personal information for monetary consideration. However,
                                    under some circumstances, a transfer of personal information to a third party, or within our family of
                                    companies, without monetary consideration may be considered a &quot;sale&quot; under California law.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Disclosure of Your Personal Data</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg text-white font-semibold">Business Transactions</h3>
                                <p>
                                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
                                    We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
                                    Policy.
                                </p>

                                <h3 className="text-lg text-white font-semibold">Law enforcement</h3>
                                <p>
                                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do
                                    so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                                </p>

                                <h3 className="text-lg text-white font-semibold">Other legal requirements</h3>
                                <p>
                                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Comply with a legal obligation</li>
                                    <li>Protect and defend the rights or property of the Company</li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>Protect the personal safety of Users of the Service or the public</li>
                                    <li>Protect against legal liability</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Security of Your Personal Data</h2>
                            <p>
                                The security of Your Personal Data is important to Us, but remember that no method of transmission over the
                                Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
                                means to protect Your Personal Data, We cannot guarantee its absolute security.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Children&apos;s Privacy</h2>
                            <p>
                                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
                                information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your
                                child has provided Us with Personal Data, please contact Us. If We become aware that We have collected
                                Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to
                                remove that information from Our servers.
                            </p>
                            <p>
                                If We need to rely on consent as a legal basis for processing Your information and Your country requires
                                consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Links to Other Websites</h2>
                            <p>
                                Our Service may contain links to other websites that are not operated by Us. If You click on a third party
                                link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy
                                of every site You visit.
                            </p>
                            <p>
                                We have no control over and assume no responsibility for the content, privacy policies or practices of any
                                third party sites or services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Changes to this Privacy Policy</h2>
                            <p>
                                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
                                Privacy Policy on this page.
                            </p>
                            <p>
                                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                                effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
                            </p>
                            <p>
                                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
                                are effective when they are posted on this page.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>By email: privacy@company.com</li>
                                <li>By visiting this page on our website: www.company.com/contact</li>
                                <li>By phone number: +1 234 567 8900</li>
                                <li>By mail: 123 Privacy Street, City, State 12345</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Your Rights Under the GDPR</h2>
                            <p>
                                If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data
                                protection rights, covered by GDPR.
                            </p>
                            <p>
                                We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal
                                Data.
                            </p>
                            <p>
                                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
                                systems, please contact us.
                            </p>
                            <p>In certain circumstances, you have the following data protection rights:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The right to access, update or to delete the information we have on you</li>
                                <li>The right of rectification</li>
                                <li>The right to object</li>
                                <li>The right of restriction</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">California Privacy Rights (CCPA)</h2>
                            <p>
                                If you are a California resident, you are entitled to learn what data we collect about you, ask to delete
                                your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests
                                and ask us:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>What personal information we have about you. If you make this request, we will return to you:</li>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>The categories of personal information we have collected about you</li>
                                    <li>The categories of sources from which we collect your personal information</li>
                                    <li>The business or commercial purpose for collecting or selling your personal information</li>
                                    <li>The categories of third parties with whom we share personal information</li>
                                    <li>The specific pieces of personal information we have collected about you</li>
                                </ul>
                                <li>
                                    To delete your personal information. If you make this request, we will delete the personal information we
                                    hold about you as of the date of your request from our records and direct any service providers to do the
                                    same. In some cases, deletion may be accomplished through de-identification of the information.
                                </li>
                                <li>
                                    To stop selling your personal information. We don&apos;t sell or rent your personal information to any third
                                    parties for any purpose. We do not sell your personal information for monetary consideration. However,
                                    under some circumstances, a transfer of personal information to a third party, or within our family of
                                    companies, without monetary consideration may be considered a &quot;sale&quot; under California law.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Disclosure of Your Personal Data</h2>

                            <div className="space-y-4">
                                <h3 className="text-lg text-white font-semibold">Business Transactions</h3>
                                <p>
                                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
                                    We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
                                    Policy.
                                </p>

                                <h3 className="text-lg text-white font-semibold">Law enforcement</h3>
                                <p>
                                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do
                                    so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                                </p>

                                <h3 className="text-lg text-white font-semibold">Other legal requirements</h3>
                                <p>
                                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Comply with a legal obligation</li>
                                    <li>Protect and defend the rights or property of the Company</li>
                                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>Protect the personal safety of Users of the Service or the public</li>
                                    <li>Protect against legal liability</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Security of Your Personal Data</h2>
                            <p>
                                The security of Your Personal Data is important to Us, but remember that no method of transmission over the
                                Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
                                means to protect Your Personal Data, We cannot guarantee its absolute security.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Children&apos;s Privacy</h2>
                            <p>
                                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
                                information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your
                                child has provided Us with Personal Data, please contact Us. If We become aware that We have collected
                                Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to
                                remove that information from Our servers.
                            </p>
                            <p>
                                If We need to rely on consent as a legal basis for processing Your information and Your country requires
                                consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Links to Other Websites</h2>
                            <p>
                                Our Service may contain links to other websites that are not operated by Us. If You click on a third party
                                link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy
                                of every site You visit.
                            </p>
                            <p>
                                We have no control over and assume no responsibility for the content, privacy policies or practices of any
                                third party sites or services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Changes to this Privacy Policy</h2>
                            <p>
                                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
                                Privacy Policy on this page.
                            </p>
                            <p>
                                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                                effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
                            </p>
                            <p>
                                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
                                are effective when they are posted on this page.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold md:text-2xl text-white">Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>By email: privacy@company.com</li>
                                <li>By visiting this page on our website: www.company.com/contact</li>
                                <li>By phone number: +1 234 567 8900</li>
                                <li>By mail: 123 Privacy Street, City, State 12345</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
