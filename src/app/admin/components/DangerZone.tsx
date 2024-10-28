import DangerZoneAction from "./DangerZoneAction";

const TOGGLEABLE_PERMISSIONS = [
    {
        title: "Registration",
        isEnabled: false,
        description:
            "When registration is enabled, delegates are able to create accounts and register for workshops. When registration is disabled, new delegates can not register for workshops, but already registered delegates can change their workshops.",
        toggle: () => {},
    },
    {
        title: "Automatic Workshop Locations",
        isEnabled: true,
        description:
            "When matching is enabled, workshops are automatically matched to locations based on popularity at 3:00AM CST every Sunday. When matching is disabled, workshop locations will not be changed",
        toggle: () => {},
    },
    {
        title: "Workshop Changes",
        isEnabled: true,
        description:
            "When workshop changes are enabled, registered delegates can freely change their workshops. When workshop changes are disabled, registered delegates can not change their workshops",
        toggle: () => {},
    },
];

export default function DangerZone() {
    return (
        <div className="border-2 rounded divide-y-2 flex flex-col">
            {TOGGLEABLE_PERMISSIONS.map((permission, idx) => {
                return (
                    <DangerZoneAction
                        key={idx}
                        title={permission.title}
                        description={permission.description}
                        permissionState={
                            permission.isEnabled ? "ENABLED" : "DISABLED"
                        }
                        actionText={
                            permission.isEnabled
                                ? `Disable ${permission.title}`
                                : `Enable ${permission.title}`
                        }
                        confirmText={
                            permission.isEnabled
                                ? `enable ${permission.title.toLowerCase()}`
                                : `disable ${permission.title.toLowerCase()}`
                        }
                        changePermission={permission.toggle}
                    />
                );
            })}
            <DangerZoneAction
                title="Reset Database"
                description="By resetting the database you will remove all workshop, location, facilitator information. Only do this after FACT is over. Account information will not be removed. Resetting the database will require an access key from FACT IT."
                actionText={"Reset Database"}
                confirmText={
                    "Are you sure you want to reset the database? This action is permanent and can not be undone."
                }
                changePermission={() => {
                    let code = prompt(
                        "Enter the code provided by another admin"
                    );
                }}
            />
        </div>
    );
}
